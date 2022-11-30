import React, { useState } from "react";
import { useEffect } from "react";
import { detect } from "detect-browser";

const formatVersion = (version = "0.0") => {
    return Number(version.split(".")[0]) || 0;
};

const useBrowserValid = () => {
    const browser = detect();
    const [isBrowserValid, setIsBrowserValid] = useState(true);
    useEffect(() => {
        switch (true) {
            case browser.name === "chrome" && formatVersion(browser.version) < 96:
                setIsBrowserValid(false);
                break;
            case browser.name === "firefox" && formatVersion(browser.version) < 79:
                setIsBrowserValid(false);
                break;
            case (browser.name === "edge" || browser.name === "edge-chromium" || browser.name === "edge-ios") && formatVersion(browser.version) < 98:
                setIsBrowserValid(false);
                break;
            case (browser.name === "opera" || browser.name === "opera-mini") && formatVersion(browser.version) < 83:
                setIsBrowserValid(false);
                break;

            default:
                break;
        }
    }, [browser]);

    return {isBrowserValid, browserVersion: browser.version};
};

export default useBrowserValid;
