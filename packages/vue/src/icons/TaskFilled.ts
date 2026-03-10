// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TaskFilledSvg from '@colelab/icons-svg/es/asn/TaskFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TaskFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TaskFilledSvg }, slots);
  },
});
