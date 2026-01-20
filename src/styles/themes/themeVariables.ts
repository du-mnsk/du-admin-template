import { css } from 'styled-components'

import { hexToRGB } from '@/shared/utils/tempUtils'
import { BASE_COLORS } from '@/styles/themes/constants'
import { lightColorsTheme } from '@/styles/themes/light/lightTheme'

export const lightThemeVariables = css`
  color-scheme: 'light';
  --primary-color: ${lightColorsTheme.primary};
  --primary1-color: ${lightColorsTheme.primary1};
  --primary-gradient-color: ${lightColorsTheme.primaryGradient};
  --info-color: var(--primary-color);
  --secondary-color: ${lightColorsTheme.secondary};
  --tertiary-color: ${lightColorsTheme.tertiary};
  --error-color: ${lightColorsTheme.error};
  --warning-color: ${lightColorsTheme.warning};
  --success-color: ${lightColorsTheme.success};
  --background-color: ${lightColorsTheme.background};
  --secondary-background-color: ${lightColorsTheme.secondaryBackground};
  --secondary-background-selected-color: ${lightColorsTheme.secondaryBackgroundSelected};
  --additional-background-color: ${lightColorsTheme.additionalBackground};
  --collapse-background-color: ${lightColorsTheme.collapseBackground};
  --timeline-background-color: ${lightColorsTheme.timelineBackground};
  --spinner-base-color: ${lightColorsTheme.spinnerBase};
  --sider-background-color: ${lightColorsTheme.siderBackground};
  --shadow-color: ${lightColorsTheme.shadow};
  --border-color: ${lightColorsTheme.border};
  --border-nft-color: ${lightColorsTheme.borderNft};
  --scroll-color: ${lightColorsTheme.scroll};

  --primary-rgb-color: ${hexToRGB(lightColorsTheme.primary)};
  --info-rgb-color: ${hexToRGB(lightColorsTheme.primary)};
  --secondary-rgb-color: ${hexToRGB(lightColorsTheme.secondary)};
  --error-rgb-color: ${hexToRGB(lightColorsTheme.error)};
  --warning-rgb-color: ${hexToRGB(lightColorsTheme.warning)};
  --success-rgb-color: ${hexToRGB(lightColorsTheme.success)};
  --background-rgb-color: ${hexToRGB(lightColorsTheme.background)};

  --text-main-color: ${lightColorsTheme.textMain};
  --text-light-color: ${lightColorsTheme.textLight};
  --text-superLight-color: ${lightColorsTheme.textSuperLight};
  --text-secondary-color: ${lightColorsTheme.textSecondary};
  --text-dark-color: ${lightColorsTheme.textDark};
  --text-nft-light-color: ${lightColorsTheme.textNftLight};
  --text-sider-primary-color: ${lightColorsTheme.textSiderPrimary};
  --text-sider-secondary-color: ${lightColorsTheme.textSiderSecondary};
  --subtext-color: ${lightColorsTheme.subText};

  --dashboard-map-background-color: ${lightColorsTheme.dashboardMapBackground};
  --dashboard-map-circle-color: ${lightColorsTheme.dashboardMapCircleColor};
  --dashboard-map-control-disabled-background-color: ${lightColorsTheme.dashboardMapControlDisabledBackground};

  --chart-tooltip-label-color: ${lightColorsTheme.chartTooltipLabel};
  --chart-color1: ${lightColorsTheme.chartColor1};
  --chart-rgb-color1: ${hexToRGB(lightColorsTheme.chartColor1)};
  --chart-color1-tint: ${lightColorsTheme.chartColor1Tint};
  --chart-color2: ${lightColorsTheme.chartColor2};
  --chart-color2-tint: ${lightColorsTheme.chartColor2Tint};
  --chart-color3: ${lightColorsTheme.chartColor3};
  --chart-color3-tint: ${lightColorsTheme.chartColor3Tint};
  --chart-color4: ${lightColorsTheme.chartColor4};
  --chart-color4-tint: ${lightColorsTheme.chartColor4Tint};
  --chart-color5: ${lightColorsTheme.chartColor5};
  --chart-rgb-color5: ${hexToRGB(lightColorsTheme.chartColor5)};
  --chart-color5-tint: ${lightColorsTheme.chartColor5Tint};

  --notification-success-color: ${lightColorsTheme.notificationSuccess};
  --notification-primary-color: ${lightColorsTheme.notificationPrimary};
  --notification-warning-color: ${lightColorsTheme.notificationWarning};
  --notification-error-color: ${lightColorsTheme.notificationError};

  --icon-color: ${lightColorsTheme.icon};
  --icon-hover-color: ${lightColorsTheme.iconHover};
  --box-shadow: ${lightColorsTheme.boxShadow};
  --box-shadow-hover: ${lightColorsTheme.boxShadowHover};
  --box-shadow-nft-color: ${lightColorsTheme.boxShadowNft};
  --box-shadow-nft-secondary-color: ${lightColorsTheme.boxShadowNftSecondary};

  --heading-color: ${lightColorsTheme.heading};
  --item-hover-bg: ${lightColorsTheme.itemHoverBg};
  --background-base-color: ${lightColorsTheme.backgroundColorBase};
  --border-base-color: ${lightColorsTheme.borderBase};
  --disabled-color: ${lightColorsTheme.disable};
  --disabled-bg-color: ${lightColorsTheme.disabledBg};
  --layout-body-bg-color: ${lightColorsTheme.layoutBodyBg};
  --layout-header-bg-color: ${lightColorsTheme.layoutHeaderBg};
  --layout-sider-bg-color: ${lightColorsTheme.layoutSiderBg};
  --input-placeholder-color: ${lightColorsTheme.inputPlaceholder};
  --avatar-bg: ${lightColorsTheme.avatarBg};
  --alert-text-color: ${lightColorsTheme.alertTextColor};
  --breadcrumb-color: ${lightColorsTheme.breadcrumb};
`

export const commonThemeVariables = css`
  color-scheme: light dark;
  --white: ${BASE_COLORS.white};
  --black: ${BASE_COLORS.black};
  --green: ${BASE_COLORS.green};
  --orange: ${BASE_COLORS.orange};
  --gray: ${BASE_COLORS.gray};
  --lightgrey: ${BASE_COLORS.lightgrey};
  --violet: ${BASE_COLORS.violet};
  --lightgreen: ${BASE_COLORS.lightgreen};
  --pink: ${BASE_COLORS.pink};
  --blue: ${BASE_COLORS.blue};
  --skyblue: ${BASE_COLORS.skyblue};
  --red: ${BASE_COLORS.red};
`

export const antOverrideCssVariables = css`
  --ant-primary-color: var(--primary-color) !important;
  --ant-primary-1: var(--primary1-color) !important;
`
