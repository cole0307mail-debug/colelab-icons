// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SankeyOutlinedSvg from '@colelab/icons-svg/es/asn/SankeyOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SankeyOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SankeyOutlinedSvg }, slots);
  },
});
