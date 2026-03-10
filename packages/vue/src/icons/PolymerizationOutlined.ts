// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PolymerizationOutlinedSvg from '@colelab/icons-svg/es/asn/PolymerizationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PolymerizationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PolymerizationOutlinedSvg }, slots);
  },
});
