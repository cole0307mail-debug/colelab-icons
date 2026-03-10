// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireHostOutlinedSvg from '@colelab/icons-svg/es/asn/FireHostOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireHostOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireHostOutlinedSvg }, slots);
  },
});
