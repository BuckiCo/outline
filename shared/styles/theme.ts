import { darken, lighten, transparentize } from "polished";
import { DefaultTheme, Colors } from "styled-components";
import breakpoints from "./breakpoints";

const defaultColors: Colors = {
  transparent: "transparent",
  almostBlack: "#181818", // Used for darkmode Background
  lightBlack: "#313131", // 
  almostWhite: "#f2f2f2", // Used for text in darkmode
  veryDarkBlue: "#232323", // Used for darkmode Sidebar
  slate: "#a2a2a2", // Used for creation date and viewcount below title in darkmode
  slateLight: "#f1eee8",
  slateDark: "#8a8a8a",
  smoke: "#FAF9F6",
  smokeLight: "#fbfaf7",
  smokeDark: "#f1eee8",
  white: "#FFFFFF",
  white05: "rgba(255, 255, 255, 0.05)",
  white10: "rgba(255, 255, 255, 0.1)",
  white50: "rgba(255, 255, 255, 0.5)",
  white75: "rgba(255, 255, 255, 0.75)",
  black: "#000",
  black05: "rgba(0, 0, 0, 0.05)",
  black10: "rgba(0, 0, 0, 0.1)",
  black50: "rgba(0, 0, 0, 0.50)",
  black75: "rgba(0, 0, 0, 0.75)",
  accent: "#0366d6",
  yellow: "#F29F10",
  warmGrey: "#FAF9F6", // Used for sidebar in lightmode
  danger: "#FF4632",
  warning: "#F5910E",
  success: "#36322F",
  info: "#9CC8FB",
  brand: {
    red: "#FF4632",
    pink: "#F45494",
    purple: "#BE59F8",
    blue: "#3392FF",
    marine: "#0FBBEF",
    dusk: "#5853F7",
    green: "#3FE322",
    yellow: "#F8BC20",
  },
};

const spacing = {
  sidebarWidth: 260,
  sidebarRightWidth: 300,
  sidebarCollapsedWidth: 16,
  sidebarMinWidth: 200,
  sidebarMaxWidth: 600,
};

const buildBaseTheme = (input: Partial<Colors>) => {
  const colors = {
    ...defaultColors,
    ...input,
  };

  return {
    fontFamily:
      "Instrument Sans, Inter, -apple-system, BlinkMacSystemFont,'Segoe UI', Roboto, Oxygen, sans-serif",
    fontFamilyEditor:
      "Public Sans, Instrument Sans, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif",
    fontFamilyMono:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontFamilyEmoji:
      "Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Segoe UI, Twemoji Mozilla, Noto Color Emoji, Android Emoji",
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    accentText: colors.white,
    selected: colors.accent,
    textHighlight: "#FDD69B",
    textHighlightForeground: colors.almostBlack,
    commentMarkBackground: transparentize(0.5, "#16CAF7"),
    code: colors.lightBlack,
    codeComment: "#867C79",
    codePunctuation: "#87685E",
    codeNumber: "#D5372C",
    codeProperty: "#DA9A18",
    codeTag: "#2A7BD9",
    codeClassName: "#2A7BD9",
    codeString: "#0B72A6",
    codeSelector: "#5961D7",
    codeAttr: "#CE5E1C",
    codeEntity: "#1498D",
    codeKeyword: "#D5372C",
    codeFunction: "#8933CB",
    codeStatement: "#1A99D0",
    codePlaceholder: "#2E8AD4",
    codeInserted: "#47474A",
    codeImportant: "#D34215",
    noticeInfoBackground: colors.brand.blue,
    noticeInfoText: colors.almostBlack,
    noticeTipBackground: "#F5BE31",
    noticeTipText: colors.almostBlack,
    noticeWarningBackground: "#FF4632",
    noticeWarningText: colors.almostBlack,
    noticeSuccessBackground: colors.brand.green,
    noticeSuccessText: colors.almostBlack,
    tableSelectedBackground: transparentize(0.9, colors.accent),
    breakpoints,
    ...colors,
    ...spacing,
  };
};

export const buildLightTheme = (input: Partial<Colors>): DefaultTheme => {
  const colors = buildBaseTheme(input);

  return {
    ...colors,
    isDark: false,
    background: colors.white,
    backgroundSecondary: colors.warmGrey,
    backgroundTertiary: "#F1EEE8",
    backgroundQuaternary: darken(0.05, "#F1EEE8"),
    link: colors.accent,
    cursor: colors.almostBlack,
    text: colors.almostBlack,
    textSecondary: "#65625b",
    textTertiary: colors.slate,
    textDiffInserted: colors.almostBlack,
    textDiffInsertedBackground: "rgba(102, 187, 41, 0.16)",
    textDiffDeleted: colors.slateDark,
    textDiffDeletedBackground: "#FFDEDE",
    placeholder: "#9c8e86",
    sidebarBackground: colors.warmGrey,
    sidebarActiveBackground: "#f1eee8",
    sidebarControlHoverBackground: "rgb(185 183 180 / 20%)",
    sidebarDraftBorder: darken("0.25", colors.warmGrey),
    sidebarText: "rgb(103, 99, 91)", // Sidebar Button Text
    backdrop: "rgba(0, 0, 0, 0.2)",
    shadow: "rgba(0, 0, 0, 0.2)",

    modalBackdrop: "rgba(0, 0, 0, 0.15)",
    modalBackground: colors.white,
    modalShadow:
      "0 4px 8px rgb(0 0 0 / 8%), 0 2px 4px rgb(0 0 0 / 0%), 0 30px 40px rgb(0 0 0 / 8%)",

    menuItemSelected: colors.warmGrey,
    menuBackground: colors.white,
    menuShadow:
      "0 0 0 1px rgb(0 0 0 / 2%), 0 4px 8px rgb(0 0 0 / 8%), 0 2px 4px rgb(0 0 0 / 0%), 0 30px 40px rgb(0 0 0 / 8%)",
    divider: colors.slateLight,
    titleBarDivider: colors.slateLight,
    inputBorder: colors.slateLight,
    inputBorderFocused: colors.slate,
    listItemHoverBackground: colors.warmGrey,
    mentionBackground: colors.warmGrey,
    mentionHoverBackground: "#fbfaf7",
    tableSelected: colors.accent,
    buttonNeutralBackground: colors.white,
    buttonNeutralText: colors.almostBlack,
    buttonNeutralBorder: darken(0.15, colors.white),
    tooltipBackground: colors.almostBlack,
    tooltipText: colors.white,
    toastBackground: colors.white,
    toastText: colors.almostBlack,
    quote: "#d8d2ca",
    codeBackground: "#fbfaf7",
    codeBorder: "#d8d2ca",
    embedBorder: "#d8d2ca",
    horizontalRule: "#f1eee8",
    progressBarBackground: colors.slateLight,
    scrollbarBackground: colors.smoke,
    scrollbarThumb: darken(0.15, colors.smokeDark),
  };
};

export const buildDarkTheme = (input: Partial<Colors>): DefaultTheme => {
  const colors = buildBaseTheme(input);

  return {
    ...colors,
    isDark: true,
    background: colors.almostBlack,
    backgroundSecondary: "#272727",
    backgroundTertiary: "#313131",
    backgroundQuaternary: lighten(0.1, "#313131"),
    link: "#137FFB",
    text: colors.almostWhite,
    cursor: colors.almostWhite,
    textSecondary: lighten(0.1, "#868686"),
    textTertiary: "#868686",
    textDiffInserted: colors.almostWhite,
    textDiffInsertedBackground: "rgba(63,185,80,0.3)",
    textDiffDeleted: darken(0.1, colors.almostWhite),
    textDiffDeletedBackground: "rgba(248,81,73,0.15)",
    placeholder: "#696969",
    sidebarBackground: colors.veryDarkBlue,
    sidebarActiveBackground: lighten(0.09, colors.veryDarkBlue),
    sidebarControlHoverBackground: colors.white10,
    sidebarDraftBorder: darken("0.35", colors.slate),
    sidebarText: colors.slate,
    backdrop: "rgba(0, 0, 0, 0.5)",
    shadow: "rgba(0, 0, 0, 0.6)",

    modalBackdrop: colors.black50,
    modalBackground: colors.almostBlack,
    modalShadow:
      "0 0 0 1px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.08)",

    menuItemSelected: lighten(0.09, colors.almostBlack),
    menuBackground: colors.almostBlack,
    menuShadow:
      "0 0 0 1px rgb(48 45 41), 0 8px 16px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.08)",
    divider: lighten(0.1, colors.almostBlack),
    titleBarDivider: darken(0.4, colors.slate),
    inputBorder: colors.slateDark,
    inputBorderFocused: colors.slate,
    listItemHoverBackground: colors.white10,
    mentionBackground: lighten(0.09, colors.veryDarkBlue),
    mentionHoverBackground: lighten(0.15, colors.veryDarkBlue),
    tableSelected: colors.accent,
    buttonNeutralBackground: colors.almostBlack,
    buttonNeutralText: colors.white,
    buttonNeutralBorder: "#3a3a3a",
    tooltipBackground: colors.white,
    tooltipText: colors.lightBlack,
    toastBackground: colors.veryDarkBlue,
    toastText: colors.almostWhite,
    quote: colors.accent,
    code: colors.almostWhite,
    codeBackground: "#2F2F2F",
    codeBorder: colors.white10,
    codeTag: "#b5cea8",
    codeString: "#ce9178",
    codeKeyword: "#569CD6",
    codeFunction: "#dcdcaa",
    codeClassName: "#4ec9b0",
    codeImportant: "#569CD6",
    codeAttr: "#9cdcfe",
    embedBorder: colors.black50,
    horizontalRule: lighten(0.1, colors.almostBlack),
    noticeInfoText: colors.white,
    noticeTipText: colors.white,
    noticeWarningText: colors.white,
    noticeSuccessText: colors.white,
    progressBarBackground: colors.slate,
    scrollbarBackground: colors.black,
    scrollbarThumb: colors.lightBlack,
  };
};

export const buildPitchBlackTheme = (input: Partial<Colors>) => {
  const colors = buildDarkTheme(input);

  return {
    ...colors,
    background: colors.black,
    codeBackground: colors.almostBlack,
  };
};

export const light = buildLightTheme(defaultColors);

export default light as DefaultTheme;
