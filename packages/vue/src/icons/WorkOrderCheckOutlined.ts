// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WorkOrderCheckOutlinedSvg from '@colelab/icons-svg/es/asn/WorkOrderCheckOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WorkOrderCheckOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WorkOrderCheckOutlinedSvg }, slots);
  },
});
