// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlayFilledSvg from '@colelab/icons-svg/es/asn/PlayFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlayFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlayFilledSvg }, slots);
  },
});
