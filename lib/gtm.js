export const GTM_ID = "GTM-WNQWZ5L"

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}