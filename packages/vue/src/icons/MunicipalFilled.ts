// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MunicipalFilledSvg from '@colelab/icons-svg/es/asn/MunicipalFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MunicipalFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MunicipalFilledSvg }, slots);
  },
});
