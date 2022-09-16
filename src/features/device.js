import { createSignal, onCleanup } from "solid-js";

export const DEVICE = {
  Mobile: "mobile",
  Desktop: "desktop",
};

// In the big project it's better to move it to design system
const breakpoints = {
  mobile: 400,
};

const getDevice = () =>
  window.innerWidth < breakpoints.mobile ? DEVICE.Mobile : DEVICE.Desktop;

export const useDevice = () => {
  const [device, setDevice] = createSignal(getDevice());

  const handleResize = () =>
    // This is simple hack
    // if the screen is narrow enough it means that the device is mobile
    setDevice(getDevice());

  window.addEventListener("resize", handleResize);

  onCleanup(() => window.removeEventListener("resize", handleResize));

  return device;
};
