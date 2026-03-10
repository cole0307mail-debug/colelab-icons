// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireGunsOutlinedSvg from '@colelab/icons-svg/es/asn/FireGunsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireGunsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireGunsOutlinedSvg }, slots);
  },
});
