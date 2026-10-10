import {
  SunIcon,
  MoonIcon,
  LogoIcon,
  InboxIcon,
  LoadingIcon,
  PlusIcon,
  PriorityLowIcon,
  PriorityNormalIcon,
  PriorityHightIcon,
  MarkIcon,
  TaskEditIcon,
  CheckDropdownIcon,
  ChevronDropdownIcon,
  UpdatedAtDescIcon,
  UpdatedAtAscIcon,
  CreatedAtDescIcon,
  CreatedAtAscIcon,
  AlphabeticalDescIcon,
  AlphabeticalAscIcon,
  PriorityDescIcon,
  PriorityAscIcon,
  FilterDropdownIcon,
  FooterDeleteIcon,
} from './icons';

const icons = {
  sun: SunIcon,
  moon: MoonIcon,
  logo: LogoIcon,
  inbox: InboxIcon,
  loading: LoadingIcon,
  plus: PlusIcon,
  priorityLow: PriorityLowIcon,
  priorityNormal: PriorityNormalIcon,
  priorityHight: PriorityHightIcon,
  mark: MarkIcon,
  taskEdit: TaskEditIcon,
  checkDropdown: CheckDropdownIcon,
  chevronDropdown: ChevronDropdownIcon,
  updatedAtDesc: UpdatedAtDescIcon,
  updatedAtAsc: UpdatedAtAscIcon,
  createdAtDesc: CreatedAtDescIcon,
  createdAtAsc: CreatedAtAscIcon,
  alphabeticalDesc: AlphabeticalDescIcon,
  alphabeticalAsc: AlphabeticalAscIcon,
  priorityDesc: PriorityDescIcon,
  priorityAsc: PriorityAscIcon,
  filterDropdown: FilterDropdownIcon,
  footerDelete: FooterDeleteIcon,
};

export function Icon({ name, ...props }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
}
