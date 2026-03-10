// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WorkOrderTransferOutlinedSvg from '@colelab/icons-svg/es/asn/WorkOrderTransferOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WorkOrderTransferOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WorkOrderTransferOutlinedSvg }, slots);
  },
});
