const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const chalk = require('chalk');
const { parseAllInterface } = require('@youngjuning/interface-comments-parser');

const base = parseAllInterface(
  path.join(__dirname, `../node_modules/DefinitelyTyped/types/tuya-panel-kit/index.d.ts`)
);
const theme = parseAllInterface(
  path.join(__dirname, `../node_modules/DefinitelyTyped/types/tuya-panel-kit/theme.d.ts`)
);
let result = { ...theme, ...base };

result = _.pick(result, [
  'RadialGradientBackground',
  'LinearGradientBackground',
  'ButtonProps',
  'BrickButtonProps',
  'CarouselProps',
  'CheckboxProps',
  'CircleViewProps',
  'CollapsibleProps',
  'ControllerBarProps',
  'DatePickerProps',
  'DialogProps',
  'DialogCancelProps',
  'DialogAlertProps',
  'DialogCheckboxProps',
  'DialogConfirmProps',
  'DialogListProps',
  'DialogPromptProps',
  'DialogCustomProps',
  'DividerProps',
  'GlobalToastProps',
  'IconFontProps',
  'LinearGradientProps',
  'ModalProps',
  'MotionProps',
  'MotionFadeProps',
  'MotionPullUpProps',
  'MotionPushDownProps',
  'MotionScaleFadeInProps',
  'MotionScalePullDownProps',
  'MotionToastProps',
  'NotificationProps',
  'NotificationLegacyProps',
  'PickerViewProps',
  'PickerViewIOSProps',
  'PopupProps',
  'PopUpCountdownProps',
  'PopupDatePickerProps',
  'PopUpListProps',
  'PopupNumberSelectorProps',
  'PopupPickerProps',
  'PopupTimerPickerProps',
  'PopupCustomProps',
  'GestureProps',
  'ProgressProps',
  'SpaceProps',
  'DoubleProps',
  'ComposeProps',
  'RadialGradientProps',
  'RotationViewProps',
  'SliderProps',
  'StepperProps',
  'SwipeoutProps',
  'SwitchButtonProps',
  'TabProps',
  'TabPaneProps',
  'TabsProps',
  'TabContentProps',
  'TabPanelProps',
  'TabBarProps',
  'TimerPickerProps',
  'TipsProps',
  'ToastProps',
  'ToastSuccessProps',
  'ToastWarningProps',
  'ToastErrorProps',
  'ToastLoadingProps',
  'TopBarProps',
  'TopBarActionProps',
  'TopBarContentProps',
  'TopBarContainerProps',
  'TYFlatListProps',
  'TYListItemProps',
  'TYSectionCheckboxProps',
  'TYSectionInputProps',
  'TYSectionSliderProps',
  'TYSectionSwitchProps',
  'TYSectionListProps',
  'TYTextProps',
  'UnitTextProps',
  'BatteryProps',
  'SliderProgressProps',
  'SliderWithLineProps',
]);

fs.writeFile(
  './props.json',
  JSON.stringify(result),
  function(err) {
    console.log('\nParse props');
    if (err) console.log(err);
    else console.log(chalk.green('success'), `${Object.keys(result).length} props parsed`);
  }
);
