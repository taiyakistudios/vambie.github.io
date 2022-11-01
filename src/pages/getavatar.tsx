import React from 'react'

export default function GetAvatarPage() {
  const redirectUrl = 'https://app.taiyakistudios.com/universe/vambie/selectAvatar'
  return (
    <>
      <meta charSet="utf-8" />
      <title>Redirecting to {redirectUrl}</title>
      <meta http-equiv="refresh" content={`0; URL=${redirectUrl}`} />
      <link rel="canonical" href={redirectUrl} />
    </>
  )
}
