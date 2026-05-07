import React, { useEffect } from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from '../api/mediaApi'
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, setResults } from '../redux/features/MediaSlice'
import ResultCard from './ResultCard'

const ResultGrid = () => {

  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.media
  )

  const dispatch = useDispatch()

  const getData = async () => {

    dispatch(setLoading())

    let data = []

    if (activeTab == 'photos') {

      let res = await fetchPhotos(query)

      data = res.results.map((item) => ({
        id: item.id,
        type: 'photo',
        title: item.alt_description,
        thumbnail: item.urls.thumb,
        src: item.urls.full
      }))
    }

    if (activeTab == 'videos') {

      let response = await fetchVideos(query)

      data = response.videos.map((item) => ({
        id: item.id,
        type: 'video',
        title: item.user.name || 'video',
        thumbnail: item.image,
        src: item.video_files[0].link
      }))
    }

    if (activeTab == 'GIF') {

      let res = await fetchGIF(query)

      data = res.data.data.map((item) => ({
        id: item.id,
        type: 'GIF',
        title: item.title || 'GIF',
        thumbnail: item.file.xs.gif.url,
        src: item.file.md.gif.url
      }))
    }

    dispatch(setResults(data))
  }

  useEffect(() => {
    getData()
  }, [query, activeTab])

  /* ---------------- ERROR STATE ---------------- */

  if (error)
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">

        <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-4xl mb-6 animate-pulse">
          ⚠️
        </div>

        <h1 className="text-3xl font-bold text-red-400 mb-3">
          Something Went Wrong
        </h1>

        <p className="text-gray-400 max-w-md">
          Failed to fetch media content. Please try another search query or refresh the page.
        </p>

      </div>
    )

  /* ---------------- LOADING STATE ---------------- */

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-24">

        {/* Loader */}
        <div className="relative w-24 h-24">

          <div className="absolute inset-0 rounded-full border-[5px] border-cyan-500/20"></div>

          <div className="absolute inset-0 rounded-full border-[5px] border-transparent border-t-cyan-400 border-r-fuchsia-500 animate-spin"></div>

          <div className="absolute inset-3 rounded-full border-[5px] border-transparent border-b-blue-500 border-l-cyan-400 animate-spin duration-700"></div>

        </div>

        <h1 className="mt-8 text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
          Loading Amazing Content...
        </h1>

        <p className="text-gray-400 mt-3">
          Fetching the best {activeTab} for you ✨
        </p>

      </div>
    )

  /* ---------------- EMPTY STATE ---------------- */

  if (!results.length)
    return (
      <div className="flex flex-col items-center justify-center text-center py-24">

        <div className="w-28 h-28 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-5xl mb-6 backdrop-blur-xl shadow-lg">
          🔍
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">
          Search Anything
        </h1>

        <p className="text-gray-400 max-w-xl leading-relaxed">
          Explore millions of photos, videos, and animated GIFs with a modern
          ultra-fast media search experience.
        </p>

      </div>
    )

  /* ---------------- RESULTS ---------------- */

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

        <div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Trending {activeTab}
            </span>

          </h2>

          <p className="text-gray-400 mt-2">
            {results.length} premium results found for "
            <span className="text-cyan-400">{query || 'popular'}</span>"
          </p>

        </div>

        {/* Live Indicator */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-xl">

          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>

          <span className="text-sm text-green-300">
            Live Results
          </span>

        </div>

      </div>

      {/* Masonry Style Grid */}
      <div
        className="
          grid
          gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >

        {results.map((item, idx) => {

          return (

            <div
              key={idx}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                shadow-[0_8px_30px_rgba(0,0,0,0.45)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_12px_40px_rgba(59,130,246,0.25)]
              "
            >

              {/* Gradient Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 overflow-hidden">

                <div className="absolute -left-[120%] top-0 h-full w-[80%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shine_1.8s_linear]"></div>

              </div>

              {/* Content */}
              <div className="relative z-10">
                <ResultCard item={item} />
              </div>

              {/* Floating Type Badge */}
              <div className="absolute top-4 left-4 z-20">

                <div className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 bg-black/50 backdrop-blur-xl text-white shadow-lg">

                  {item.type === 'photo' && '📸 Photo'}
                  {item.type === 'video' && '🎬 Video'}
                  {item.type === 'GIF' && '✨ GIF'}

                </div>

              </div>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ResultGrid