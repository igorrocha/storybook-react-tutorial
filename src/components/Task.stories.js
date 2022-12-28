
import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

// const defaultProps = {
//   task: {
//     id: '1',
//     title: 'Test Task',
//     state: 'TASK_INBOX',
//   },
// };

// const pinnedProps = {
//   task: {
//     ...defaultProps,
//     state: 'TASK_PINNED',
//   }
// }

// const archivedProps = {
//   task: {
//     ...defaultProps,
//     state: 'TASK_ARCHIVED',
//   }
// }
// export const Default = () => <Task {...defaultProps} />
// export const Pinned = () => <Task {...pinnedProps} />
// export const Archived = () => <Task {...archivedProps} />