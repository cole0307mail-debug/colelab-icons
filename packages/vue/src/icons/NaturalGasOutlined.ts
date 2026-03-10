// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NaturalGasOutlinedSvg from '@colelab/icons-svg/es/asn/NaturalGasOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NaturalGasOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NaturalGasOutlinedSvg }, slots);
  },
});
