// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireHoseOutlinedSvg from '@colelab/icons-svg/es/asn/FireHoseOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireHoseOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireHoseOutlinedSvg }, slots);
  },
});
