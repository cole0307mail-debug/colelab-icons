// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WorkOrderReminderOutlinedSvg from '@colelab/icons-svg/es/asn/WorkOrderReminderOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WorkOrderReminderOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WorkOrderReminderOutlinedSvg }, slots);
  },
});
