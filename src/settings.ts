import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user'

export const handleSettings = async ({
  code,
  msg,
}: {
  code: 'error' | 'success'
  msg: string
}) => {
  let settings: SettingSchemaDesc[] = [
    {
      key: 'testConnection',
      type: 'heading',
      title: 'Connection Test',
      description: msg,
      default: '',
    },
  ]

  if (code === 'success') {
    const pluginSettings: SettingSchemaDesc[] = [
      {
        key: 'zotTemplate',
        type: 'string',
        title: 'Template Name',
        description:
          'The template name that holds your template for a Zotero page. Ensure that include parent is set to false. ',
        default: 'Zotero Template',
      },
      {
        key: 'pagenameTemplate',
        type: 'string',
        title: 'Page Name Template',
        description: `Specify the page name for each Zotero import. Available placeholders: <% citeKey %>, <% title %>`,
        default: `R: <% citeKey %>`,
      },
      {
        key: 'authorTemplate',
        type: 'string',
        title: 'Author Template',
        description:
          'Specify how authors should be shown in the properties. Available placeholders: <% firstName %>, <% lastName %>, <% creatorType %>',
        default: '<% firstName %> <% lastName %> (<% creatorType %>)',
      },
      {
        key: 'citekeyTemplate',
        type: 'string',
        title: 'Template for Cite Key',
        description: `Specify the template when using the command /Zotero: Insert citation. Ensure that <% citeKey %> placeholder is indicated in your template`,
        default: '[@<% citeKey %>]',
      },
      {
        key: 'pageReferences',
        type: 'string',
        title: 'Properties that should be linked as page references',
        description: `A list of space separated properties, that should be linked as page references (e.g. accessDate itemType).`,
        default: 'itemType accessDate date dateAdded dateModified tags collections',
      },
      {
        key: 'tagReferences',
        type: 'string',
        title: 'Properties that should be linked as tags',
        description: `A list of space separated properties, that should be linked as tags (e.g. accessDate itemType).`,
        default: '',
      },
    ]

    settings = [...settings, ...pluginSettings]
  }

  logseq.useSettingsSchema(settings)
}
