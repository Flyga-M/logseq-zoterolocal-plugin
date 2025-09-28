export const getPropertyReference = (
  propertyName: string,
  value: string,
): string => {
  
  const pageRefs = logseq.settings!.pageReferences as string
  const tagRefs = logseq.settings!.tagReferences as string
  
  if (pageRefs.split(" ").includes(propertyName)) {
    return `[[${value}]]`
  }

  if (tagRefs.split(" ").includes(propertyName)) {

    // TODO consider including a tag naming rule to have multiple options
    if (value.indexOf(" ") > -1) {
      return `#[[${value}]]`
    }

    return `#${value}`
  }

  return value
}