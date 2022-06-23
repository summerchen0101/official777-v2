import ClubTabs from '@/components/event/ClubTabs'
import React, { useEffect, useState } from 'react'

export interface Cursors {
  before: string
  after: string
}
interface Paging {
  cursors: Cursors
}

export interface Datum {
  name: string
  id: string
  created_time: string
}

export interface ResData {
  data: Datum[]
  paging?: Paging
}

function EventClubPhonePage() {
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  FB.getLoginStatus((res) => {
    if (res.status === 'connected') {
      FB.api<{ name: string; id: string }>('/me', (res) => {
        setUsername(res.name)
        setUserId(res.id)
      })
    }
  })

  // FB.Event.subscribe('auth.statusChange', (res) => {
  //   console.log(res)
  // })

  useEffect(() => {
    if (!userId) return
    FB.api<ResData>(`/${userId}/likes/101091025701333`, (res) => {
      setIsLiked(res.data.length > 0)
    })

    // FB.api('/me/permissions', function (response) {
    //   var declined = []
    //   for (let i = 0; i < response.data.length; i++) {
    //     if (response.data[i].status == 'declined') {
    //       declined.push(response.data[i].permission)
    //     }
    //   }
    //   alert(declined.toString())
    // })
  }, [userId])

  const onFBLogin = () => {
    FB.login(
      (res) => {
        console.log(res)
        if (res.authResponse) {
          FB.api<{ name: string }>('/me', (res) => {
            setUsername(res.name)
          })

          FB.api(
            '/me',
            'get',
            { fields: 'email,name,id,likes' },
            (response) => {
              console.log(response)
            },
          )
        } else {
          console.log('User cancelled login or did not fully authorize.')
        }
      },
      {
        scope: 'email,user_likes',
        return_scopes: true,
        enable_profile_selector: true,
      },
    )
  }

  const onFBLogout = () => {
    FB.logout((res) => {
      if (res.status === 'unknown') {
        setUsername('')
        alert('登出成功')
      }
    })
  }
  return (
    <div className="">
      <ClubTabs />
      {isLiked ? (
        <div className="text-white">你已說讚！</div>
      ) : (
        <iframe
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FOnline539&width=60&layout=button&action=like&size=small&share=false&height=65&appId=540545553836884"
          width="60"
          height="65"
          className="border-none overflow-hidden"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      )}
      {username ? (
        <div className="text-white">
          <div className="mb-4">
            Hello! {username}~{userId}
          </div>
          <div
            className="bg-yellow-500 text-white p-2 cursor-pointer inline-block"
            onClick={onFBLogout}
          >
            登出FB
          </div>
        </div>
      ) : (
        <>
          <div
            className="bg-blue-500 text-white p-2 cursor-pointer inline-block"
            onClick={onFBLogin}
          >
            登入FB
          </div>
        </>
      )}

      {/*
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOnline539&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=540545553836884"
        width="340"
        height="331"
        className="border-none overflow-hidden"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe> */}
    </div>
  )
}

export default EventClubPhonePage
