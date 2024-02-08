import { UpdatedPageProps, UpdatedScheduleProps } from "../shared/api.interfaces";

export const getListItems = (pageContent: UpdatedPageProps | UpdatedScheduleProps) => {
  const listItems: [string, string][] = [];
  const descriptions: string[] = [];
  const headings = Object.entries(pageContent).filter(item => {
    if (item[0].includes('list_item_heading')) {
      const headingNumber = item[0].slice(-2).replace('_', '');
      const hasMatch = Object.keys(pageContent).includes(`list_item_description_${headingNumber}`);
      hasMatch && descriptions.push(pageContent[`list_item_description_${headingNumber}` as keyof (UpdatedPageProps | UpdatedScheduleProps)] as string)

      return hasMatch;
    }
  });
  
  headings.forEach((item, index) => {
    listItems.push([item[1], descriptions[index]]);
  });

  return listItems;
};