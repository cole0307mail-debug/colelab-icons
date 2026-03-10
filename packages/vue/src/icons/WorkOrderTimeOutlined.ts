// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WorkOrderTimeOutlinedSvg from '@colelab/icons-svg/es/asn/WorkOrderTimeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WorkOrderTimeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WorkOrderTimeOutlinedSvg }, slots);
  },
});
