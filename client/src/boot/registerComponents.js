
import Injector from 'lib/Injector';
import CopyElementAction from 'components/ElementActions/CopyElementAction';

export default () => {
  // Add CopyElementAction as an extra button to ElementActions
  Injector.transform('element-actions', (updater) => {
    updater.component('ElementActions', (OriginalActions) => (props) => (
      <>
        <OriginalActions {...props} />
        {props.element && <CopyElementAction element={props.element} />}
      </>
    ));
  });
};
