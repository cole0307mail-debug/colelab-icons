// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PostOfficeFilledSvg from '@colelab/icons-svg/es/asn/PostOfficeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PostOfficeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PostOfficeFilledSvg }, slots);
  },
});
