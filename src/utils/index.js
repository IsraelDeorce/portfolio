export function formatLanguage (language) {
  if (typeof language === 'string') {
    if (language.length > 2) language = language.substring(0, 2)
    language = language.toLowerCase()
  }
  return language
}
