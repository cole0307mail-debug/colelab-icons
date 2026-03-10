// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RadiationLayoutOutlinedSvg from '@colelab/icons-svg/es/asn/RadiationLayoutOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RadiationLayoutOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RadiationLayoutOutlinedSvg }, slots);
  },
});
