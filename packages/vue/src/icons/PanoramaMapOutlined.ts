// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PanoramaMapOutlinedSvg from '@colelab/icons-svg/es/asn/PanoramaMapOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PanoramaMapOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PanoramaMapOutlinedSvg }, slots);
  },
});
