// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LineOutlinedSvg from '@colelab/icons-svg/es/asn/LineOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LineOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LineOutlinedSvg }, slots);
  },
});
