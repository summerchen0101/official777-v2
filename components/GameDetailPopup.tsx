import { gameIntroImgsMap } from '@/lib/games'
import { gameIntroMap, gameMap } from '@/lib/map'
import { useStore } from '@/store/useStore'
import { toImgPath } from '@/utils'
import React from 'react'
import Popup from './Popup'

export default function GameDetailPopup() {
  const closeGamePopup = useStore((s) => s.closeGamePopup)
  const isShowGamePopup = useStore((s) => s.isShowGamePopup)
  const popupGameID = useStore((s) => s.popupGameID)
  return (
    <Popup onClose={closeGamePopup} isShow={isShowGamePopup}>
      <div id="s0" className="flex justify-center">
        <h1 className="text-4xl text-gold-400 font-medium mb-8">
          {gameMap[popupGameID]}
        </h1>
      </div>
      {gameIntroImgsMap[popupGameID] && (
        <>
          <div className="hidden md:block fixed lg:top-1/3 lg:right-0 space-x-2 lg:space-x-0 lg:space-y-2 lg:flex lg:flex-col">
            {Object.entries(gameIntroMap)
              .filter(([code, label]) =>
                Object.keys(gameIntroImgsMap[popupGameID]).includes(code),
              )
              .map(([code, label]) => (
                <a
                  key={code}
                  href={`#${code}`}
                  className="w-40 border border-white rounded p-2 text-xl transition-all translate-x-5 hover:translate-x-3"
                >
                  {label}
                </a>
              ))}
          </div>
          <section className="lg:w-[860px] mx-auto sm:px-4">
            <div className="bg-[#10111d] py-10 sm:rounded-lg flex flex-col gap-12">
              {Object.entries(gameIntroImgsMap[popupGameID]).map(
                ([introCode, imgs]) => (
                  <div
                    id={introCode}
                    key={introCode}
                    className="flex flex-col gap-6"
                  >
                    {imgs.map((img, img_i) => (
                      <img
                        key={img_i}
                        src={toImgPath(`/game/intro/${popupGameID}/${img}`)}
                        alt=""
                      />
                    ))}
                  </div>
                ),
              )}
            </div>
          </section>
        </>
      )}
    </Popup>
  )
}
