import React from 'react'

const ResultCard = ({ item }) => {

  return (

    <div
      className="
        group
        relative
        h-[420px]
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-black/30
        backdrop-blur-2xl
        shadow-[0_8px_40px_rgba(0,0,0,0.45)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_12px_50px_rgba(59,130,246,0.25)]
      "
    >

      {/* Animated Background Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10"></div>

      {/* Main Link */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-full w-full overflow-hidden"
        href={item.src}
      >

        {/* Image / Video Container */}
        <div className="absolute inset-0 overflow-hidden">

          {/* PHOTO */}
          {item.type == 'photo' && (
            <img
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:rotate-1
              "
              src={item.src}
              alt={item.title}
            />
          )}

          {/* VIDEO */}
          {item.type == 'video' && (
            <video
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-all
                duration-700
                group-hover:scale-110
              "
              autoPlay
              loop
              muted
              playsInline
              src={item.src}
            ></video>
          )}

          {/* GIF */}
          {(item.type == 'GIF' || item.type == 'gif') && (
            <img
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-all
                duration-700
                group-hover:scale-110
              "
              src={item.src}
              alt={item.title}
            />
          )}

        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 z-20">

          <div
            className="
              flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              border
              border-white/10
              bg-black/50
              backdrop-blur-xl
              text-xs
              font-semibold
              tracking-wider
              text-white
              shadow-lg
            "
          >

            {item.type == 'photo' && '📸 Photo'}
            {item.type == 'video' && '🎬 Video'}
            {(item.type == 'GIF' || item.type == 'gif') && '✨ GIF'}

          </div>

        </div>

        {/* Floating Action Button */}
        <div
          className="
            absolute
            top-4
            right-4
            opacity-0
            translate-y-3
            group-hover:opacity-100
            group-hover:translate-y-0
            transition-all
            duration-500
            z-20
          "
        >

          <div
            className="
              w-11
              h-11
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              hover:scale-110
              transition
              shadow-lg
            "
          >
            ↗
          </div>

        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 overflow-hidden">

          <div
            className="
              absolute
              -left-[120%]
              top-0
              h-full
              w-[70%]
              rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent
              group-hover:animate-[shine_1.5s_linear]
            "
          ></div>

        </div>

        {/* Bottom Content */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            p-5
            z-20
          "
        >

          {/* Title */}
          <h2
            className="
              text-white
              text-lg
              font-bold
              leading-snug
              line-clamp-2
              capitalize
              drop-shadow-lg
            "
          >
            {item.title || 'Untitled Media'}
          </h2>

          {/* Bottom Meta */}
          <div className="flex items-center justify-between mt-4">

            {/* Category */}
            <div
              className="
                px-3
                py-1
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                text-xs
                text-gray-200
              "
            >
              Trending Media
            </div>

            {/* Hover Text */}
            <div
              className="
                text-sm
                text-cyan-300
                font-medium
                opacity-0
                translate-y-2
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all
                duration-500
              "
            >
              View →
            </div>

          </div>

        </div>

      </a>

    </div>
  )
}

export default ResultCard