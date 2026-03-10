// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ShareAltOutlinedSvg from '@colelab/icons-svg/es/asn/ShareAltOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ShareAltOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ShareAltOutlinedSvg }, slots);
  },
});
