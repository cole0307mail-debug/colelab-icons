// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GithubFilledSvg from '@colelab/icons-svg/es/asn/GithubFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GithubFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GithubFilledSvg }, slots);
  },
});
