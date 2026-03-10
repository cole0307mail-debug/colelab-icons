// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TaskOutlinedSvg from '@colelab/icons-svg/es/asn/TaskOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TaskOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TaskOutlinedSvg }, slots);
  },
});
