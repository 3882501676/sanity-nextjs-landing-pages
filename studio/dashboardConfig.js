export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5eb9b6161787f26b68cc3552',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-agqoihos',
                  apiId: 'acb7a353-1589-4457-a38e-44ed209300c1'
                },
                {
                  buildHookId: '5eb9b6161787f2547ccc360d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dnfb4su3',
                  apiId: '7c7d3c13-4c8d-4464-baa3-484008d22994'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/3882501676/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dnfb4su3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
