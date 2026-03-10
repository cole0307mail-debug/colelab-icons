// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoFishingOutlinedSvg from '@colelab/icons-svg/es/asn/NoFishingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoFishingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoFishingOutlinedSvg }, slots);
  },
});
