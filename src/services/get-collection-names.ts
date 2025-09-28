import { CollectionItem } from '../interfaces'
import { getPropertyReference } from './get-property-reference'

export const getCollectionNames = (
  keys: string[],
  collections: CollectionItem[],
): string[] => {
  const collectionArr: string[] = []
  for (const key of keys) {
    for (const collection of collections) {
      if (key === collection.key) {
        collectionArr.push(getPropertyReference('collections', collection.name))
      }
    }
  }
  return collectionArr
}
