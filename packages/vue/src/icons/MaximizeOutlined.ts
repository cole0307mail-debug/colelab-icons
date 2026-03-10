// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MaximizeOutlinedSvg from '@colelab/icons-svg/es/asn/MaximizeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MaximizeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MaximizeOutlinedSvg }, slots);
  },
});
