export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa76fd6819bc9456cec59f5',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-d985c65f',
                  apiId: '4dcac6b6-b316-4f89-a816-f9822b71bbe9'
                },
                {
                  buildHookId: '5fa76fd6ab38897abe2e8ff0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-85dth9k9',
                  apiId: '202eca93-82a3-4573-b6ce-7b803ad468a6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MHutchbot/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-85dth9k9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
