// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ThumbnailOutlinedSvg from '@colelab/icons-svg/es/asn/ThumbnailOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ThumbnailOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ThumbnailOutlinedSvg }, slots);
  },
});
