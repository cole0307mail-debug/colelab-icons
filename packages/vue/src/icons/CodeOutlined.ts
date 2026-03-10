// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CodeOutlinedSvg from '@colelab/icons-svg/es/asn/CodeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CodeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CodeOutlinedSvg }, slots);
  },
});
