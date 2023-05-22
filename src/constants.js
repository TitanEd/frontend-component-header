export const notificationTabs = {
  REMINDERS: 'reminders',
  DISCUSSIONS: 'discussions',
  GRADES: 'grades',
  AUTHORING: 'authoring',
};

export const notificationTabsLabel = {
  [notificationTabs.REMINDERS]: 'Reminders',
  [notificationTabs.DISCUSSIONS]: 'Discussions',
  [notificationTabs.GRADES]: 'Grades',
  [notificationTabs.AUTHORING]: 'Authoring',
};

export const notificationTabsOptions = [
  {
    key: notificationTabs.REMINDERS,
    title: notificationTabsLabel[notificationTabs.REMINDERS],
  },
  {
    key: notificationTabs.DISCUSSIONS,
    title: notificationTabsLabel[notificationTabs.DISCUSSIONS],
  },
  {
    key: notificationTabs.GRADES,
    title: notificationTabsLabel[notificationTabs.GRADES],
  },
  {
    key: notificationTabs.AUTHORING,
    title: notificationTabsLabel[notificationTabs.AUTHORING],
  },
];
