// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WorkOrderSuspendedOutlinedSvg from '@colelab/icons-svg/es/asn/WorkOrderSuspendedOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WorkOrderSuspendedOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WorkOrderSuspendedOutlinedSvg }, slots);
  },
});
