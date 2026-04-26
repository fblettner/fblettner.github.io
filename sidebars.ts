import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  libertySidebar: [
    'liberty/getting-started',
    {
      type: 'category',
      label: 'Installation',
      items: [
        'liberty/technical/architecture',
        'liberty/technical/installation',
        'liberty/technical/tools-deployment',
        'liberty/technical/liberty-deployment',
        'liberty/technical/linux-services',
        'liberty/technical/post-ssl',
      ],
    },
    {
      type: 'category',
      label: 'Nomasx-1',
      items: [
        {
          type: 'category',
          label: "Administrator's Guide",
          items: ['liberty/nomasx1/admin/global-settings'],
        },
      ],
    },
    {
      type: 'category',
      label: 'React Components',
      items: [
        'liberty/core/getting-started',
        'liberty/core/new-project',
        {
          type: 'category',
          label: 'Services',
          items: [
            'liberty/core/services/appprovider',
            'liberty/core/services/modules',
            'liberty/core/services/applications',
            'liberty/core/services/users',
            'liberty/core/services/authentication',
            'liberty/core/services/use-media-query',
            'liberty/core/services/themes',
            'liberty/core/services/error-boundary',
            'liberty/core/services/translations',
          ],
        },
        {
          type: 'category',
          label: 'Core Components',
          items: [
            {
              type: 'category',
              label: 'UI Elements',
              items: [
                'liberty/core/components/ui-elements/alert',
                'liberty/core/components/ui-elements/alert-message',
                'liberty/core/components/ui-elements/button',
                'liberty/core/components/ui-elements/card',
                'liberty/core/components/ui-elements/checkbox',
                'liberty/core/components/ui-elements/circular-progress',
                'liberty/core/components/ui-elements/collapse',
                'liberty/core/components/ui-elements/divider',
                'liberty/core/components/ui-elements/flex',
                'liberty/core/components/ui-elements/flex-advanced',
                'liberty/core/components/ui-elements/icon-button',
                'liberty/core/components/ui-elements/loading-indicator',
                'liberty/core/components/ui-elements/markdown',
                'liberty/core/components/ui-elements/snack-message',
                'liberty/core/components/ui-elements/toggle-button',
                'liberty/core/components/ui-elements/tooltip',
                'liberty/core/components/ui-elements/typography',
              ],
            },
            {
              type: 'category',
              label: 'Inputs & Forms',
              items: [
                'liberty/core/components/inputs-forms/checkbox',
                'liberty/core/components/inputs-forms/color-picker',
                'liberty/core/components/inputs-forms/date-picker',
                'liberty/core/components/inputs-forms/enum',
                'liberty/core/components/inputs-forms/file-upload',
                'liberty/core/components/inputs-forms/input',
                'liberty/core/components/inputs-forms/select',
              ],
            },
            {
              type: 'category',
              label: 'Dialogs & Overlays',
              items: [
                'liberty/core/components/dialogs-overlays/dialog',
                'liberty/core/components/dialogs-overlays/confirmation',
                'liberty/core/components/dialogs-overlays/export',
                'liberty/core/components/dialogs-overlays/popper',
                'liberty/core/components/dialogs-overlays/tabs',
              ],
            },
            {
              type: 'category',
              label: 'Tables & Lists',
              items: [
                'liberty/core/components/tables-lists/grid',
                'liberty/core/components/tables-lists/table',
                'liberty/core/components/tables-lists/list',
                'liberty/core/components/tables-lists/context-menus',
                'liberty/core/components/tables-lists/tree',
              ],
            },
            {
              type: 'category',
              label: 'Charts',
              items: [
                'liberty/core/components/charts/bar',
                'liberty/core/components/charts/line',
                'liberty/core/components/charts/pie',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Main Components',
          items: [
            'liberty/core/components/main-components/header',
            'liberty/core/components/main-components/content',
            'liberty/core/components/main-components/login',
            'liberty/core/components/main-components/menus',
            'liberty/core/components/main-components/users',
          ],
        },
        {
          type: 'category',
          label: 'Forms Components',
          items: [
            'liberty/core/components/forms-components/dashboard',
            'liberty/core/components/forms-components/advanced-grid',
          ],
        },
        {
          type: 'category',
          label: 'Styled Elements',
          items: [
            'liberty/core/components/styled-elements/button',
            'liberty/core/components/styled-elements/card',
            'liberty/core/components/styled-elements/dialog',
            'liberty/core/components/styled-elements/div',
            'liberty/core/components/styled-elements/form',
            'liberty/core/components/styled-elements/global-styles',
            'liberty/core/components/styled-elements/icon-button',
            'liberty/core/components/styled-elements/icons',
            'liberty/core/components/styled-elements/input',
            'liberty/core/components/styled-elements/list',
            'liberty/core/components/styled-elements/main',
            'liberty/core/components/styled-elements/menus',
            'liberty/core/components/styled-elements/paper',
            'liberty/core/components/styled-elements/stack',
            'liberty/core/components/styled-elements/table',
            'liberty/core/components/styled-elements/tabs',
            'liberty/core/components/styled-elements/typography',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'liberty/api/liberty-api',
        'liberty/release-notes',
        'liberty/issues',
        'liberty/incidents',
      ],
    },
  ],

  nomaublSidebar: [
    'nomaubl/getting-started',
    {
      type: 'category',
      label: 'Installation',
      items: [
        'nomaubl/installation/prerequisites',
        'nomaubl/installation/build',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'nomaubl/configuration/global',
        'nomaubl/configuration/e-invoicing',
        'nomaubl/configuration/e-directory',
        'nomaubl/configuration/document-templates',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'nomaubl/user-guide/cli',
        'nomaubl/user-guide/web-interface',
        'nomaubl/user-guide/workflow',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'nomaubl/features/ubl-generation',
        'nomaubl/features/validation',
        'nomaubl/features/pa-integration',
        'nomaubl/features/import-status',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'nomaubl/reference/processing-types',
        'nomaubl/reference/status-codes',
        'nomaubl/reference/database-schema',
        'nomaubl/reference/reference-lists',
        'nomaubl/reference/api',
      ],
    },
    'nomaubl/release-notes',
  ],

  apiSidebar: [
    'api/getting-started',
    {
      type: 'category',
      label: 'JD Edwards API',
      items: [
        'api/jde-api/jdebip',
        'api/jde-api/jdebsfn',
      ],
    },
    {
      type: 'category',
      label: 'BI Publisher API',
      items: [
        'api/bip-api/nomabc',
        'api/bip-api/nomabip',
      ],
    },
  ],
};

export default sidebars;
