// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import StickerOutlinedSvg from '@colelab/icons-svg/es/asn/StickerOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'StickerOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: StickerOutlinedSvg }, slots);
  },
});
