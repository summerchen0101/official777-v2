export default function useDeviceDetect() {
  const isMobile =
    process.browser &&
    window.innerHeight > window.innerWidth &&
    window.innerWidth < 800

  return { isMobile }
}
