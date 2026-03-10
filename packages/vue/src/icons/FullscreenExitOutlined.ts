// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FullscreenExitOutlinedSvg from '@colelab/icons-svg/es/asn/FullscreenExitOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FullscreenExitOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FullscreenExitOutlinedSvg }, slots);
  },
});
