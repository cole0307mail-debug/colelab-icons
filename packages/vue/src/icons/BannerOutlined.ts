// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BannerOutlinedSvg from '@colelab/icons-svg/es/asn/BannerOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BannerOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BannerOutlinedSvg }, slots);
  },
});
