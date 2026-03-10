// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ScienceMuseumOutlinedSvg from '@colelab/icons-svg/es/asn/ScienceMuseumOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ScienceMuseumOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ScienceMuseumOutlinedSvg }, slots);
  },
});
